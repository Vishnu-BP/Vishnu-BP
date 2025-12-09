# Generate Resume PDF

## Option 1: Online LaTeX Compiler (Easiest - 2 minutes)

### For General Resume:
1. Go to **https://www.overleaf.com/project** (free account)
2. Click "New Project" → "Blank Project"
3. Delete all content in `main.tex`
4. Copy content from `resume__general.pdf` (the LaTeX script you provided)
5. Click "Recompile"
6. Download PDF → rename to `Vishnu_BP_Resume.pdf`

### For Internship Resume:
1. Repeat above steps
2. Use content from `resume_internship.pdf`
3. Download → rename to `Vishnu_BP_Resume_Internship.pdf`

## Option 2: Local Compilation (if you have LaTeX installed)

```bash
# Install MiKTeX (Windows) or TeX Live (if not installed)
# Then run:
pdflatex resume__general.tex
pdflatex resume_internship.tex
```

## Step 3: Add to Portfolio

Once you have the PDFs:
1. Place them in `client/public/` folder:
   - `client/public/Vishnu_BP_Resume.pdf`
   - `client/public/Vishnu_BP_Resume_Internship.pdf`

2. The download buttons will work automatically!

---

**Quick Link:** https://www.overleaf.com/

