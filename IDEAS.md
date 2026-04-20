# Ideas

## Custom Sticker Upload (Lambda + AWS)

Let visitors drag-and-drop their own images onto the portfolio to create new draggable stickers, with automatic background removal via AWS Lambda.

### Flow
1. Browser uploads image to S3 via presigned URL
2. S3 upload triggers Lambda
3. Lambda runs `rembg` (Python) to remove background → outputs transparent PNG
4. Output written to public S3 bucket
5. Frontend polls or receives callback URL → injects result as a new `DraggableSticker`

### Considerations
- `rembg` is heavy — Lambda cold starts will be slow. Use provisioned concurrency or a lighter model
- Sticker list needs to move from hardcoded to dynamic (localStorage array of URLs)
- Need a max sticker count or cleanup policy so the page doesn't get cluttered
- Output bucket needs public read + CORS configured for the frontend domain
- Jeffrey has AWS experience and can set up the infra via console

---

## Sticker Drop-off Page (`/stickers`)

A dedicated page where visitors can upload an image to create a custom draggable sticker on the portfolio.

### UX
1. Drag-and-drop or click-to-upload an image (PNG/JPG)
2. Preview the original image with a "remove background" button
3. Lambda processes it — show a loading state while waiting
4. Preview the transparent result, with an option to re-upload if it looks off
5. Confirm → sticker appears on the main portfolio page as a new `DraggableSticker`

### Notes
- Keep it minimal to match the portfolio aesthetic — no heavy UI, just a drop zone and preview
- Could show a gallery of stickers that have been added (fun social element)
- Rate limit uploads per IP to prevent abuse
- Max file size (e.g. 5MB) enforced on the frontend before hitting S3

---

### Stack
- S3 (upload + output buckets)
- Lambda (Python, `rembg` layer)
- Possibly API Gateway for the callback
- Frontend: extend `DraggableSticker` to accept a dynamic `src` URL from S3
