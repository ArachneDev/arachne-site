# arachne-site

The public website of the Arachne WARDOGS clan, at `https://arachne.doublew.nu`. It is a TanStack Start (React, Tailwind) site that Node renders on request. It has no backend, no database, no secrets and no environment beyond `PORT`.

This repo was made from `app-starter`. `AGENTS.md` carries the container contract: keep it true when you change the code.

## Develop

| To | Run |
|---|---|
| Install | `corepack enable && pnpm install --frozen-lockfile --ignore-scripts` (Node 22) |
| Run with reload | `pnpm dev` |
| Test | `pnpm test` |
| Build the image | `podman build --build-arg VERSION=dev -t arachne-site .` |
| Run it as the host does | `podman run --rm -p 3000:3000 --read-only --tmpfs /tmp --cap-drop=all --memory=384m arachne-site` |

Check: `curl localhost:3000/healthz` prints `ok dev`.

- Images the pages use live in `public/__l5e/assets-v1/` and are served as plain files. `src/assets/*.asset.json` points at them by path.
- `pnpm-lock.yaml` is the only lockfile. The build installs with `--frozen-lockfile` and refuses packages published in the last 24 hours.
- The build config comes from `@lovable.dev/vite-tanstack-config` (the site was exported from Lovable). The `Containerfile` builds it with `NITRO_PRESET=node-server`.

## Port

3000 (the `PORT` variable overrides it). `/healthz` returns `ok <version>`, the `VERSION` build argument.

## Volumes

None. The server writes nothing, so it runs on a read-only root.

## Dependencies

None. The pages call no API and no other service at run time.

## Memory

Peak about 40 MB of resident memory after 300 requests (20 at a time) and about 23 MB after start-up [Local test, Node 22 on Alpine, 384 MB limit]. The pipeline input `memory: 384m` in `.github/workflows/release.yml` keeps the old limit.

## CI

`.github/workflows/release.yml` calls the shared build in `ArachneDev/app-pipeline`: pull requests build, scan and run the contract test; a version tag such as `v1.0.0` also pushes the image to ghcr.io.

## Before the first commit

Install the gitleaks hook: `pip install pre-commit && pre-commit install`. Turn on GitHub push protection for the repo.
