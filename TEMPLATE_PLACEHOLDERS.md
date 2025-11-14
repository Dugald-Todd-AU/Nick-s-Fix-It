# Template Placeholders

This template uses placeholders that are replaced by the CLI during generation.

## Placeholder Format

Placeholders use the format: `{{PLACEHOLDER_NAME}}`

## Important Notes

⚠️ **Templates cannot be built directly** - they contain placeholders that break TypeScript/JSX compilation.

### For Local Development

Before running `npm run dev` or `npm run build`, run:

```bash
node scripts/prepare-dev.js
```

This replaces all placeholders with example values so the template can build and run locally.

### For CLI Generation

The CLI automatically replaces all placeholders when generating a new prototype. You don't need to run prepare-dev.js before using the CLI.

## Available Placeholders

- `{{BUSINESS_NAME}}` - Business name
- `{{REGION}}` - Service region/city
- `{{PHONE}}` - Contact phone number
- `{{EMAIL}}` - Contact email address
- `{{SERVICES_LIST}}` - Comma-separated services (gets converted to array)
- `{{CTA_TEXT}}` - Call-to-action button text
- `{{PRIMARY_COLOR}}` - Primary brand color (hex)
- `{{PRIMARY_COLOR_DARK}}` - Primary dark color (hex)
- `{{ACCENT_COLOR}}` - Accent brand color (hex)
- `{{ACCENT_COLOR_DARK}}` - Accent dark color (hex)

