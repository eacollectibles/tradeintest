
# Shopify Buyback App (Step 4)

This folder is ready for GitHub → Netlify deploy.

## 🛠 Folder Structure

```
/
├── public/
│   ├── index.html
│   └── style.css
├── functions/
│   └── buybackstep4.js
└── netlify.toml
```

## 🚀 How to Deploy

1. Upload this entire folder to GitHub
2. Connect the repo to Netlify
3. Make sure Netlify uses:
   - **Publish directory**: `public`
   - **Functions folder**: `functions`
4. On deploy, you should see:
   ✓ Function 'buybackstep4' compiled successfully

5. Test URL:
```
https://<your-site>.netlify.app/.netlify/functions/buybackstep4
```
