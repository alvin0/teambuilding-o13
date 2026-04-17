## Team Building 2026 Landing Page

Landing page trình chiếu cho chương trình Team Building 2026, dựng bằng Next.js App Router, React, Tailwind CSS và Framer Motion.

## Local Development

Chạy môi trường development:

```bash
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem giao diện.

## Static Export

Project này được cấu hình để build ra static site, phù hợp với GitHub Pages.

```bash
npm run build
```

Sau khi build xong, thư mục `out/` sẽ chứa toàn bộ file HTML, CSS, JS và asset tĩnh để deploy.

## GitHub Pages

Repo đã có sẵn workflow cho GitHub Pages tại `.github/workflows/deploy-pages.yml`.

Thiết lập tương ứng trên GitHub:

1. Vào `Settings` → `Pages`
2. Ở mục `Build and deployment`, chọn `Source: GitHub Actions`
3. Push code lên branch `main`
4. GitHub Actions sẽ build static export từ `next build`, upload thư mục `out/` và deploy lên Pages

## Ghi chú triển khai

- `output: "export"` được bật trong `next.config.ts`, nên app không cần server Node khi deploy.
- `trailingSlash: true` giúp output phù hợp hơn với static hosting.
- `NEXT_PUBLIC_BASE_PATH` được inject tự động trong GitHub Actions dựa trên tên repo, nên site vẫn chạy đúng khi publish dưới `https://<user>.github.io/<repo>/`.
- `public/.nojekyll` đã được thêm để GitHub Pages không bỏ qua các file/thư mục đặc biệt như `_next`.
