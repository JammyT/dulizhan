# Template Files Directory

This directory contains the downloadable template files for the Risepekt Store template system.

## Directory Structure

```
public/templates/
├── aplt30/          # 30 per sheet templates (1"×2-5/8")
│   ├── APLT30_template.doc
│   ├── APLT30_template.pdf
│   ├── APLT30_template.ai
│   └── APLT30_template.pages
├── aplt06/          # 6 per sheet templates (3-1/3"×4")
│   ├── APLT06_template.doc
│   ├── APLT06_template.pdf
│   ├── APLT06_template.ai
│   └── APLT06_template.pages
└── README.md        # This file
```

## Adding Template Files

To add actual template files:

1. **For APLT30 (30 per sheet) templates:**
   - Place files in `public/templates/aplt30/`
   - Use filenames: `APLT30_template.{format}`

2. **For APLT06 (6 per sheet) templates:**
   - Place files in `public/templates/aplt06/`
   - Use filenames: `APLT06_template.{format}`

## Supported Formats

- `.doc` - Microsoft Word format
- `.pdf` - Adobe PDF format
- `.ai` - Adobe Illustrator format
- `.pages` - Apple Pages format

## File Naming Convention

Template files should follow this naming pattern:
`{MODEL}_template.{extension}`

Examples:
- `APLT30_template.doc`
- `APLT30_template.pdf`
- `APLT06_template.ai`
- `APLT06_template.pages`

## Current Status

Currently, the system uses placeholder files when actual template files are not present. Once you upload the real template files to their respective directories, the download system will automatically serve them.

## File Size Recommendations

- DOC files: Keep under 1 MB
- PDF files: Keep under 2 MB  
- AI files: Keep under 5 MB
- Pages files: Keep under 3 MB

## Notes

- Files are served directly from the `public/templates/` directory
- Make sure file permissions allow read access
- Test downloads after uploading new files
- The system will fall back to placeholder content if files are missing
