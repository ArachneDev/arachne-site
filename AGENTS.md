# Container contract for this app

This app is hosted as a container by a shared platform. The platform does not care what is inside the image, only that it follows this contract. Keep it true when you change the code.

- **Port.** Listen on `PORT` (default 3000), above 1024.
- **Variables.** List every variable the app reads in `.env.example`, one `# description` line each.
- **Secrets.** Read app secrets only from `/run/secrets/app.json`. Pass each value to the code that needs it; never export it to the environment, log it or put it in the image or a build argument. A missing key is a clear start-up error. Never commit a real secret; `ci/app.json` holds fake values only.
- **Public address.** Build absolute and redirect URLs from `PUBLIC_URL`, not from the request. Trust the proxy headers.
- **Health.** `/healthz` returns 2xx with the build version: keep `ARG VERSION` and `ENV VERSION` in the `Containerfile`.
- **Hardened runtime.** The image runs with a read-only root, no capabilities and a memory limit. Write temporary files under `/tmp`. State any exception and why in the README.
- **Non-root.** End the `Containerfile` with a numeric `USER` above 0.
- **Persistence.** List every path that must persist under Volumes in the README. Run schema migrations on start-up.
- **No hardcoding.** No hostnames, IDs or keys in the code. Keep env files, keys and local data in `.gitignore` and `.dockerignore`.
- **README.** Keep sections Port, Volumes, Dependencies and Memory true; the pipeline fails without them.

Check your change: open a pull request. The pipeline builds the image, runs it under these limits, scans it and names any broken line with its fix.

Releases: push a tag `vX.Y.Z`; the image appears as `ghcr.io/arachnedev/<repo>:vX.Y.Z`.
