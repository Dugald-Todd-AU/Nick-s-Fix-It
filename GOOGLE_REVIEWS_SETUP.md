# Google Reviews Integration Setup

This app includes a performant Google Reviews integration that fetches reviews server-side with caching.

## Performance Features

- **Server-side fetching**: Reviews are fetched on the server, not the client
- **Automatic caching**: Reviews are cached for 1 hour (configurable via `revalidate`)
- **Fallback handling**: If API fails, shows mock data to prevent site breakage
- **ISR support**: Can be configured for Incremental Static Regeneration

## Setup Options

### Option 1: Google Places API (Recommended)

1. **Get your Place ID**:
   - Go to [Google Maps](https://www.google.com/maps)
   - Search for your business
   - Click on your business listing
   - The Place ID is in the URL: `.../place/?cid=PLACE_ID` or use [Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)

2. **Get API Key**:
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing
   - Enable "Places API" and "Places API (New)"
   - Create credentials → API Key
   - Restrict the API key to Places API only (recommended)

3. **Add to Environment Variables**:
   ```bash
   # .env.local
   GOOGLE_PLACE_ID=your_place_id_here
   GOOGLE_PLACES_API_KEY=your_api_key_here
   ```

4. **Cost**: ~$0.017 per request after free tier (first $200/month free)

### Option 2: Manual Import (For Development/Prototyping)

The API route automatically falls back to mock data if environment variables aren't set. You can:

1. Export reviews manually from Google My Business
2. Update the mock data in `/app/api/reviews/route.ts`
3. Or store reviews in a database and fetch from there

### Option 3: Third-Party Services

Consider services like:
- **ReviewPush**: Includes widgets and management tools
- **Grade.us**: Review aggregation and display
- **Reputation.com**: Full reputation management

These often provide their own widgets/components.

## Configuration

### Cache Duration

Edit `revalidate` in `/app/api/reviews/route.ts`:

```typescript
export const revalidate = 3600; // Seconds (1 hour default)
```

### Number of Reviews

Edit the limit in `/app/api/reviews/route.ts`:

```typescript
reviews: reviews.slice(0, 6), // Change 6 to desired number
```

### Styling

The `GoogleReviews` component uses the same styling as the testimonials section. Edit `/components/GoogleReviews.tsx` to customize.

## Testing

1. **Without API Key**: The component will show mock data
2. **With API Key**: Reviews will be fetched from Google Places API
3. **API Error**: Falls back to mock data automatically

## Troubleshooting

- **No reviews showing**: Check browser console and server logs
- **API errors**: Verify Place ID and API Key are correct
- **Rate limiting**: Google Places API has rate limits; caching helps mitigate this
- **CORS issues**: API route runs server-side, so no CORS issues

## Security Notes

- **Never commit API keys**: Keep them in `.env.local` (already in `.gitignore`)
- **Restrict API keys**: In Google Cloud Console, restrict to Places API only
- **Monitor usage**: Set up billing alerts in Google Cloud Console

