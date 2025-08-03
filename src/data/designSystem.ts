/* eslint-disable max-len */

const spacingSchema = `const spacingSchema ={
  xs: '0.125rem',
  s: '0.25rem',
  m: '0.5rem',
  l: '1rem',
  xl: '2rem',
  xxl: '4rem',
  none: '0',
};`;

export const designSystem = [
  {
    title: 'Layer',
    description: 'Example of using spacing schema and styled-components grid layers.',
    language: 'jsx',
    code: `import { styled } from "styled-components";

${spacingSchema}

export const Layer = styled.div\`
  display: grid;
  gap: \${(props) => spacingSchema[props.gutter] ?? spacingSchema.l};
\`;
`,
  },
  {
    title: 'Split',
    description:
      'A layout pattern that divides content into two columns with flexible fractions. Useful for sidebars, main content areas, or any two-part layouts.',
    language: 'jsx',
    code: `import { styled } from "styled-components";

${spacingSchema}

const fractions = {
  "1/4": "1fr 3fr",
  "1/3": "1fr 2fr",
  "1/2": "1fr 1fr",
  "2/3": "2fr 1fr",
  "3/4": "3fr 1fr",
  "auto-start": "auto 1fr",
  "auto-end": "1fr auto",
};

export const Split = styled.div\`
  display: grid;
  gap: \${(props) => spacingSchema[props.gutter] ?? spacingSchema.l};
  grid-template-columns: \${({ fraction }) => fractions[fraction] ?? fractions["1/2"]};
\`;
`,
  },
  {
    title: 'Columns & Column',
    description:
      'A layout pattern for creating responsive multi-column grids. Use `Columns` to define the number of columns and `Column` to control how many columns each item spans. Ideal for dashboards, galleries, or content-heavy layouts.',
    language: 'jsx',
    code: `import { styled } from "styled-components";

${spacingSchema}

export const Columns = styled.div\`
  --columns: \${({ columns = 1 }) => columns};
  display: grid;
  gap: \${(props) => spacingSchema[props.gutter] ?? spacingSchema.l};
  grid-template-columns: repeat(var(--columns), 1fr);
\`;

export const Column = styled.div\`
  grid-column: span min(\${({ $span = 1 }) => $span}, var(--columns)) / auto;
\`;
`,
  },
  {
    title: 'Grid',
    description:
      'A responsive grid layout that automatically adjusts the number of columns based on the available space. Use the `minItemWidth` property to control the minimum width of grid items. Perfect for galleries, product listings, or card layouts.',
    language: 'jsx',
    code: `import { styled } from "styled-components";

${spacingSchema}

export const Grid = styled.div\`
  display: grid;
  gap: \${(props) => spacingSchema[props.gutter] ?? spacingSchema.l};

  grid-template-columns: repeat(
    auto-fit,
    minmax(min(\${(props) => props.minItemWidth}, 100%), 1fr)
  );
\`;
`,
  },
  {
    title: 'Inline Bundle',
    description:
      'A flexible inline layout pattern for grouping elements such as buttons, tags, or badges. Supports wrapping, spacing with `gutter`, and alignment control via `justify` and `align` properties.',
    language: 'jsx',
    code: `import { styled } from "styled-components";

${spacingSchema}

const justifyAlignMap = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
};

export const InlineBundle = styled.div\`
  --gutter: \${(props) => spacingSchema[props.gutter] ?? spacingSchema.l};
  display: flex;
  flex-wrap: wrap;
  gap: var(--gutter);

  justify-content: \${(props) =>
    justifyAlignMap[props.justify] ?? justifyAlignMap.start};

  align-items: \${(props) =>
    justifyAlignMap[props.align] ?? justifyAlignMap.start};
\`;
`,
  },
  {
    title: 'Inline',
    description:
      'An inline layout built on top of InlineBundle with advanced controls. Supports stretching specific items, distributing space evenly, and switching to a wrapped layout at a defined breakpoint (`switchAt`). Ideal for toolbars, navigation, and control groups.',
    language: 'jsx',
    code: `import styled, { css } from "styled-components";
import { InlineBundle } from "./InlineBundle";

${spacingSchema}

const responsive = css\`
  --switchAt: \${({ switchAt }) =>
    typeof switchAt === "string" ? switchAt : \`\${switchAt}px\`};

  flex-wrap: wrap;

  & > * {
    min-width: fit-content;
    flex-basis: calc((var(--switchAt) - (100% - var(--gutter))) * 999);
  }
\`;

const stretchMap = {
  all: \`> *  { flex: 1 }\`,
  start: \`> :first-child { flex: 1 }\`,
  end: \`> :last-child { flex: 1 }\`,
};

export const Inline = styled(InlineBundle)\`
  flex-wrap: nowrap;
  \${({ stretch }) => {
    if (typeof stretch === "number")
      return \`> :nth-child(\${stretch + 1}) { flex: 1 }\`;

    return stretchMap[stretch] ?? "";
  }}

  \${({ switchAt }) => switchAt && responsive}
\`;
`,
  },
  {
    title: 'Pad',
    description:
      'A utility component for applying consistent padding using spacing tokens from the design system. Supports single or multiple values, making it easy to apply vertical and horizontal spacing in a unified way.',
    language: 'jsx',
    code: `import { styled } from "styled-components";

${spacingSchema}

export const Pad = styled.div\`
  padding: \${(props) => {
    return []
      .concat(props.padding)
      .map((padKey) => spacingSchema[padKey])
      .join(" ");
  }};
\`;
`,
  },
  {
    title: 'Center',
    description:
      'A layout utility for centering content within a page or container. Supports max-width constraints, text alignment, and flexbox centering for child elements. Ideal for creating centered sections, forms, or content blocks.',
    language: 'jsx',
    code: `import { styled } from "styled-components";

${spacingSchema}

export const Center = styled.div\`
  box-sizing: content-box;
  margin-inline-start: auto;
  margin-inline-end: auto;

  max-inline-size: \${({ maxWidth }) => maxWidth};

  \${(props) => props.centerText && "text-align: center;"}
  \${(props) =>
    props.centerChildren &&
    \`
  display: flex;
  flex-direction: column;
  align-items: center;
  \`}
\`;
`,
  },
  {
    title: 'Media Wrapper',
    description:
      'A responsive container for images and videos with a defined aspect ratio. Ensures consistent media presentation across layouts by using the `ratio` property. Falls back to padding technique if `aspect-ratio` is not supported.',
    language: 'jsx',
    code: `import { styled } from "styled-components";

export const MediaWrapper = styled.div\`
  --n: \${(props) => (props.ratio ? props.ratio[0] : 1)};
  --d: \${(props) => (props.ratio ? props.ratio[1] : 1)};

  \${(props) =>
    props.ratio &&
    \`
  aspect-ratio: var(--n) / var(--d);
  @supports not (aspect-ratio: 1/1) {
    padding-block-end: calc(var(--d) / var(--n) * 100%);
  }
\`}

  position: relative;

  > * {
    position: absolute;

    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  > img,
  > video {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }
\`;
`,
  },
  {
    title: 'Cover',
    description:
      'A layout pattern that centers the main content vertically while allowing optional header (`top`) and footer (`bottom`) sections. Useful for full-height layouts like hero sections, login screens, or landing pages.',
    language: 'jsx',
    code: `import { styled } from "styled-components";

${spacingSchema}

const Cover = styled.div.attrs(({ children, top, bottom }) => {
  return {
    children: (
      <>
        {top && <div>{top}</div>}
        <div data-cover-child>{children}</div>
        {bottom && <div>{bottom}</div>}
      </>
    ),
  };
})\`
  display: grid;
  gap: \${(props) => spacingSchema[props.gutter] ?? spacingSchema.l};
  min-block-size: \${(props) => props.minHeight ?? "100vh"};
  grid-template-rows: \${({ top, bottom }) =>
    top && bottom
      ? "auto 1fr auto"
      : top
      ? "auto 1fr"
      : bottom
      ? "1fr auto"
      : "1fr"};

  > [data-cover-child] {
    align-self: center;
  }
\`;
`,
  },
];
