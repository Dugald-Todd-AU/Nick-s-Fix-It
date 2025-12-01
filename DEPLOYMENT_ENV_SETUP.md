# Setting Up Environment Variables for Production

This guide shows you how to add your Google Reviews API credentials to your hosting platform so reviews work in production.

## Your Environment Variables

You need to add these two variables:
- `GOOGLE_PLACE_ID=ChIJG02wF_1n-2sR29n1j9M0TjQ` (already configured)
- `GOOGLE_PLACES_API_KEY=your_api_key_here` (see below to get your key)

### Getting Your Google Places API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **Places API** and **Places API (New)**
4. Go to **APIs & Services** → **Credentials**
5. Click **Create Credentials** → **API Key**
6. Copy your API key and use it as the value for `GOOGLE_PLACES_API_KEY`
7. **Important:** Restrict the API key to only the Places API for security

---

## Vercel (Most Common for Next.js)

### Steps:
1. Go to [vercel.com](https://vercel.com) and sign in
2. Select your project (or import it from GitHub if not already connected)
3. Go to **Settings** → **Environment Variables**
4. Click **Add New**
5. Add each variable:
   - **Name:** `GOOGLE_PLACE_ID`
   - **Value:** `ChIJG02wF_1n-2sR29n1j9M0TjQ`
   - **Environment:** Select all (Production, Preview, Development)
   - Click **Save**
6. Repeat for the API key:
   - **Name:** `GOOGLE_PLACES_API_KEY`
   - **Value:** `your_api_key_here`
   - **Environment:** Select all
   - Click **Save**
7. **Important:** Go to **Deployments** tab and click **Redeploy** on your latest deployment (or push a new commit) for changes to take effect

---

## Netlify

### Steps:
1. Go to [netlify.com](https://netlify.com) and sign in
2. Select your site
3. Go to **Site configuration** → **Environment variables**
4. Click **Add a variable**
5. Add each variable:
   - **Key:** `GOOGLE_PLACE_ID`
   - **Value:** `ChIJG02wF_1n-2sR29n1j9M0TjQ`
   - **Scopes:** Select all (Production, Deploy previews, Branch deploys)
   - Click **Create variable**
6. Repeat for the API key:
   - **Key:** `GOOGLE_PLACES_API_KEY`
   - **Value:** `your_api_key_here`
   - **Scopes:** Select all
   - Click **Create variable**
7. **Trigger a new deploy** (push a commit or use "Trigger deploy" button)

---

## Railway

### Steps:
1. Go to [railway.app](https://railway.app) and sign in
2. Select your project
3. Click on your service
4. Go to **Variables** tab
5. Click **+ New Variable**
6. Add each variable:
   - **Name:** `GOOGLE_PLACE_ID`
   - **Value:** `ChIJG02wF_1n-2sR29n1j9M0TjQ`
   - Click **Add**
7. Repeat for the API key:
   - **Name:** `GOOGLE_PLACES_API_KEY`
   - **Value:** `your_api_key_here`
   - Click **Add**
8. The service will automatically redeploy

---

## Render

### Steps:
1. Go to [render.com](https://render.com) and sign in
2. Select your service
3. Go to **Environment** tab
4. Scroll to **Environment Variables** section
5. Click **Add Environment Variable**
6. Add each variable:
   - **Key:** `GOOGLE_PLACE_ID`
   - **Value:** `ChIJG02wF_1n-2sR29n1j9M0TjQ`
   - Click **Save Changes**
7. Repeat for the API key:
   - **Key:** `GOOGLE_PLACES_API_KEY`
   - **Value:** `your_api_key_here`
   - Click **Save Changes**
8. Service will automatically redeploy

---

## AWS Amplify

### Steps:
1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
2. Select your app
3. Go to **App settings** → **Environment variables**
4. Click **Manage variables**
5. Add each variable:
   - **Variable name:** `GOOGLE_PLACE_ID`
   - **Value:** `ChIJG02wF_1n-2sR29n1j9M0TjQ`
   - Click **Save**
6. Repeat for the API key:
   - **Variable name:** `GOOGLE_PLACES_API_KEY`
   - **Value:** `your_api_key_here`
   - Click **Save**
7. Go to **App settings** → **Build settings** and click **Redeploy this version**

---

## DigitalOcean App Platform

### Steps:
1. Go to [cloud.digitalocean.com](https://cloud.digitalocean.com)
2. Navigate to **Apps** → Select your app
3. Go to **Settings** → **App-Level Environment Variables**
4. Click **Edit**
5. Add each variable:
   - **Key:** `GOOGLE_PLACE_ID`
   - **Value:** `ChIJG02wF_1n-2sR29n1j9M0TjQ`
   - Click **Add**
6. Repeat for the API key:
   - **Key:** `GOOGLE_PLACES_API_KEY`
   - **Value:** `your_api_key_here`
   - Click **Add**
7. Click **Save** - app will redeploy automatically

---

## Self-Hosted / Docker

If you're running the app yourself (Docker, VPS, etc.):

### Option 1: Environment File
Create a `.env.production` file (or use your existing method):
```bash
GOOGLE_PLACE_ID=ChIJG02wF_1n-2sR29n1j9M0TjQ
GOOGLE_PLACES_API_KEY=your_api_key_here
```

### Option 2: Docker
Add to your `docker-compose.yml`:
```yaml
environment:
  - GOOGLE_PLACE_ID=ChIJG02wF_1n-2sR29n1j9M0TjQ
  - GOOGLE_PLACES_API_KEY=your_api_key_here
```

Or use `.env` file with docker-compose (recommended).

---

## Verifying It Works

After adding the environment variables and redeploying:

1. Visit your production site
2. Navigate to the testimonials/reviews section
3. You should see real Google reviews instead of mock data
4. Check the browser console (F12) for any errors
5. The reviews should show:
   - Real customer names
   - Actual review text
   - Real ratings
   - Correct total review count

---

## Troubleshooting

**Reviews still showing mock data?**
- Make sure you redeployed after adding variables
- Check that variable names match exactly (case-sensitive)
- Verify the API key has "Places API" enabled in Google Cloud Console
- Check server logs for API errors

**API Errors?**
- Verify your Google Places API key is valid
- Check that "Places API" is enabled in Google Cloud Console
- Ensure the Place ID is correct
- Check API quotas/billing in Google Cloud Console

**Need Help?**
- Check the server logs in your hosting platform
- Review browser console for client-side errors
- Verify API key restrictions in Google Cloud Console

