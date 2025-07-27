import React, { useState } from 'react'
import {
  Box,
  Paper,
  Typography,
  IconButton,
  Tooltip,
  Snackbar,
  Alert,
} from '@mui/material'
import { ContentCopy, Check } from '@mui/icons-material'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface CodeBlockProps {
  code: string
  language?: string
  title?: string
  description?: string
  showLineNumbers?: boolean
}

const CodeBlock: React.FC<CodeBlockProps> = ({ 
  code, 
  language = 'javascript', 
  title, 
  description,
  showLineNumbers = true 
}) => {
  const [copied, setCopied] = useState(false)
  const [showSnackbar, setShowSnackbar] = useState(false)

  const handleCopy = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setShowSnackbar(true)
      setTimeout(() => {
        setCopied(false)
        setShowSnackbar(false)
      }, 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  return (
    <Box sx={{ mb: 3 }}>
      {title && (
        <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
          {title}
        </Typography>
      )}
      
      {description && (
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {description}
        </Typography>
      )}

      <Paper
        elevation={2}
        sx={{
          position: 'relative',
          overflow: 'hidden',
          '&:hover .copy-button': {
            opacity: 1,
          },
        }}
      >
        <Box
          className="copy-button"
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            zIndex: 1,
            opacity: 0,
            transition: 'opacity 0.2s ease-in-out',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderRadius: 1,
          }}
        >
          <Tooltip title={copied ? 'Copied!' : 'Copy code'}>
            <IconButton
              size="small"
              onClick={handleCopy}
              sx={{
                color: copied ? 'success.main' : 'text.secondary',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                },
              }}
            >
              {copied ? <Check fontSize="small" /> : <ContentCopy fontSize="small" />}
            </IconButton>
          </Tooltip>
        </Box>

        <SyntaxHighlighter
          language={language}
          style={tomorrow}
          showLineNumbers={showLineNumbers}
          customStyle={{
            margin: 0,
            padding: '16px',
            fontSize: '14px',
            lineHeight: 1.5,
            borderRadius: 0,
          }}
          lineNumberStyle={{
            color: '#666',
            fontSize: '12px',
          }}
        >
          {code}
        </SyntaxHighlighter>
      </Paper>

      <Snackbar
        open={showSnackbar}
        autoHideDuration={2000}
        onClose={() => setShowSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={() => setShowSnackbar(false)} 
          severity="success" 
          sx={{ width: '100%' }}
        >
          Code copied to clipboard!
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default CodeBlock 