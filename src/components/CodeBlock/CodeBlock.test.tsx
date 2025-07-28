import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CodeBlock from '.';

// Mock react-syntax-highlighter
vi.mock('react-syntax-highlighter', () => ({
  Prism: ({ children, language, showLineNumbers }: any) => (
    <pre
      data-testid='syntax-highlighter'
      data-language={language}
      data-show-line-numbers={showLineNumbers}
    >
      {children}
    </pre>
  ),
}));

// Mock react-syntax-highlighter styles
vi.mock('react-syntax-highlighter/dist/esm/styles/prism', () => ({
  tomorrow: {},
}));

describe('CodeBlock', () => {
  const defaultProps = {
    code: 'console.log("Hello, World!");',
    language: 'javascript',
  };

  const mockClipboard = {
    writeText: vi.fn(),
  };

  beforeEach(() => {
    // Reset mocks
    vi.clearAllMocks();

    // Mock navigator.clipboard
    Object.assign(navigator, {
      clipboard: mockClipboard,
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('Rendering', () => {
    it('renders code content correctly', () => {
      render(<CodeBlock {...defaultProps} />);

      expect(screen.getByText('console.log("Hello, World!");')).toBeInTheDocument();
    });

    it('renders with default language when not provided', () => {
      render(<CodeBlock code='test code' />);

      const syntaxHighlighter = screen.getByTestId('syntax-highlighter');
      expect(syntaxHighlighter).toHaveAttribute('data-language', 'javascript');
    });

    it('renders with custom language', () => {
      render(
        <CodeBlock
          {...defaultProps}
          language='python'
        />
      );

      const syntaxHighlighter = screen.getByTestId('syntax-highlighter');
      expect(syntaxHighlighter).toHaveAttribute('data-language', 'python');
    });

    it('renders title when provided', () => {
      render(
        <CodeBlock
          {...defaultProps}
          title='Test Code Block'
        />
      );

      expect(screen.getByText('Test Code Block')).toBeInTheDocument();
    });

    it('renders description when provided', () => {
      render(
        <CodeBlock
          {...defaultProps}
          description='This is a test description'
        />
      );

      expect(screen.getByText('This is a test description')).toBeInTheDocument();
    });

    it('does not render title when not provided', () => {
      render(<CodeBlock {...defaultProps} />);

      expect(screen.queryByRole('heading')).not.toBeInTheDocument();
    });

    it('does not render description when not provided', () => {
      render(<CodeBlock {...defaultProps} />);

      expect(screen.queryByText(/description/i)).not.toBeInTheDocument();
    });

    it('renders with line numbers by default', () => {
      render(<CodeBlock {...defaultProps} />);

      const syntaxHighlighter = screen.getByTestId('syntax-highlighter');
      expect(syntaxHighlighter).toHaveAttribute('data-show-line-numbers', 'true');
    });

    it('renders without line numbers when showLineNumbers is false', () => {
      render(
        <CodeBlock
          {...defaultProps}
          showLineNumbers={false}
        />
      );

      const syntaxHighlighter = screen.getByTestId('syntax-highlighter');
      expect(syntaxHighlighter).toHaveAttribute('data-show-line-numbers', 'false');
    });
  });

  describe('Copy functionality', () => {
    it('shows copy button on hover', async () => {
      const user = userEvent.setup();
      render(<CodeBlock {...defaultProps} />);

      const paper = screen.getByRole('button').closest('[class*="MuiPaper"]');
      expect(paper).toBeInTheDocument();

      // Initially, copy button should be hidden (opacity: 0)
      const copyButton = screen.getByRole('button');
      expect(copyButton).toBeInTheDocument();
    });

    it('copies code to clipboard when copy button is clicked', async () => {
      const user = userEvent.setup();
      mockClipboard.writeText.mockResolvedValue(undefined);

      render(<CodeBlock {...defaultProps} />);

      const copyButton = screen.getByRole('button');
      await user.click(copyButton);

      expect(mockClipboard.writeText).toHaveBeenCalledWith('console.log("Hello, World!");');
    });

    it('shows success message after copying', async () => {
      const user = userEvent.setup();
      mockClipboard.writeText.mockResolvedValue(undefined);

      render(<CodeBlock {...defaultProps} />);

      const copyButton = screen.getByRole('button');
      await user.click(copyButton);

      await waitFor(() => {
        expect(screen.getByText('Code copied to clipboard!')).toBeInTheDocument();
      });
    });

    it('changes icon to check mark after copying', async () => {
      const user = userEvent.setup();
      mockClipboard.writeText.mockResolvedValue(undefined);

      render(<CodeBlock {...defaultProps} />);

      const copyButton = screen.getByRole('button');

      // Initially should show copy icon
      expect(copyButton).toBeInTheDocument();

      await user.click(copyButton);

      // Should show check icon after copying
      await waitFor(() => {
        expect(screen.getByTestId('CheckIcon')).toBeInTheDocument();
      });
    });

    it('resets to copy icon after 2 seconds', async () => {
      const user = userEvent.setup();
      mockClipboard.writeText.mockResolvedValue(undefined);

      render(<CodeBlock {...defaultProps} />);

      const copyButton = screen.getByRole('button');
      await user.click(copyButton);

      // Wait for the timeout to complete
      await waitFor(
        () => {
          expect(screen.getByTestId('ContentCopyIcon')).toBeInTheDocument();
        },
        { timeout: 2500 }
      );
    });

    it('handles clipboard write error gracefully', async () => {
      const user = userEvent.setup();
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
      mockClipboard.writeText.mockRejectedValue(new Error('Clipboard write failed'));

      render(<CodeBlock {...defaultProps} />);

      const copyButton = screen.getByRole('button');
      await user.click(copyButton);

      expect(consoleSpy).toHaveBeenCalledWith('Failed to copy code:', expect.any(Error));

      consoleSpy.mockRestore();
    });

    it('shows correct tooltip text', async () => {
      const user = userEvent.setup();
      render(<CodeBlock {...defaultProps} />);

      const copyButton = screen.getByRole('button');

      // Initially shows "Copy code"
      expect(screen.getByText('Copy code')).toBeInTheDocument();

      // After clicking, shows "Copied!"
      mockClipboard.writeText.mockResolvedValue(undefined);
      await user.click(copyButton);

      await waitFor(() => {
        expect(screen.getByText('Copied!')).toBeInTheDocument();
      });
    });
  });

  describe('Snackbar functionality', () => {
    it('shows snackbar after copying', async () => {
      const user = userEvent.setup();
      mockClipboard.writeText.mockResolvedValue(undefined);

      render(<CodeBlock {...defaultProps} />);

      const copyButton = screen.getByRole('button');
      await user.click(copyButton);

      await waitFor(() => {
        expect(screen.getByText('Code copied to clipboard!')).toBeInTheDocument();
      });
    });

    it('auto-hides snackbar after 2 seconds', async () => {
      const user = userEvent.setup();
      mockClipboard.writeText.mockResolvedValue(undefined);

      render(<CodeBlock {...defaultProps} />);

      const copyButton = screen.getByRole('button');
      await user.click(copyButton);

      // Wait for snackbar to appear
      await waitFor(() => {
        expect(screen.getByText('Code copied to clipboard!')).toBeInTheDocument();
      });

      // Wait for snackbar to disappear
      await waitFor(
        () => {
          expect(screen.queryByText('Code copied to clipboard!')).not.toBeInTheDocument();
        },
        { timeout: 2500 }
      );
    });

    it('can close snackbar manually', async () => {
      const user = userEvent.setup();
      mockClipboard.writeText.mockResolvedValue(undefined);

      render(<CodeBlock {...defaultProps} />);

      const copyButton = screen.getByRole('button');
      await user.click(copyButton);

      // Wait for snackbar to appear
      await waitFor(() => {
        expect(screen.getByText('Code copied to clipboard!')).toBeInTheDocument();
      });

      // Close snackbar manually
      const closeButton = screen.getByRole('button', { name: /close/i });
      await user.click(closeButton);

      // Snackbar should be closed
      await waitFor(() => {
        expect(screen.queryByText('Code copied to clipboard!')).not.toBeInTheDocument();
      });
    });
  });

  describe('Accessibility', () => {
    it('has proper ARIA labels and roles', () => {
      render(<CodeBlock {...defaultProps} />);

      const copyButton = screen.getByRole('button');
      expect(copyButton).toHaveAttribute('aria-label');
    });

    it('supports keyboard navigation', async () => {
      const user = userEvent.setup();
      mockClipboard.writeText.mockResolvedValue(undefined);

      render(<CodeBlock {...defaultProps} />);

      const copyButton = screen.getByRole('button');

      // Focus the button
      copyButton.focus();
      expect(copyButton).toHaveFocus();

      // Press Enter to copy
      await user.keyboard('{Enter}');

      expect(mockClipboard.writeText).toHaveBeenCalledWith('console.log("Hello, World!");');
    });
  });

  describe('Edge cases', () => {
    it('handles empty code string', () => {
      render(
        <CodeBlock
          code=''
          language='javascript'
        />
      );

      const syntaxHighlighter = screen.getByTestId('syntax-highlighter');
      expect(syntaxHighlighter).toBeInTheDocument();
    });

    it('handles very long code strings', () => {
      const longCode = 'a'.repeat(10000);
      render(
        <CodeBlock
          code={longCode}
          language='javascript'
        />
      );

      expect(screen.getByText(longCode)).toBeInTheDocument();
    });

    it('handles special characters in code', () => {
      const specialCode = 'const str = "Hello\nWorld\tTab";';
      render(
        <CodeBlock
          code={specialCode}
          language='javascript'
        />
      );

      expect(screen.getByText(specialCode)).toBeInTheDocument();
    });

    it('handles HTML entities in code', () => {
      const htmlCode = '<div>&lt;script&gt;alert("XSS")&lt;/script&gt;</div>';
      render(
        <CodeBlock
          code={htmlCode}
          language='html'
        />
      );

      expect(screen.getByText(htmlCode)).toBeInTheDocument();
    });
  });

  describe('Styling and layout', () => {
    it('applies correct styling classes', () => {
      render(<CodeBlock {...defaultProps} />);

      const paper = screen.getByRole('button').closest('[class*="MuiPaper"]');
      expect(paper).toHaveClass('MuiPaper-root');
    });

    it('renders with proper spacing', () => {
      render(
        <CodeBlock
          {...defaultProps}
          title='Test'
          description='Description'
        />
      );

      // Check that title and description are rendered with proper spacing
      expect(screen.getByText('Test')).toBeInTheDocument();
      expect(screen.getByText('Description')).toBeInTheDocument();
    });
  });
});
