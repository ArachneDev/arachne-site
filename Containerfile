# Builds the site into a small Node image that runs the Nitro server output.
# Install scripts are off, and pnpm refuses packages published in the last 24 hours (minimumReleaseAge, in minutes).
FROM docker.io/library/node:26.13.1-alpine3.24 AS build
RUN npm install -g pnpm@12.16.1
WORKDIR /app
RUN printf 'minimumReleaseAge: 1440\nstrictDepBuilds: false\n' > pnpm-workspace.yaml
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --ignore-scripts
COPY . .
ENV NITRO_PRESET=node-server
RUN pnpm exec vite build && test -f .output/server/index.mjs

FROM docker.io/library/node:26.13.1-alpine3.24
# The pipeline passes VERSION (the release tag); /healthz returns it.
ARG VERSION=dev
ENV NODE_ENV=production VERSION=$VERSION PORT=3000 HOST=0.0.0.0
WORKDIR /app
COPY --from=build /app/.output ./.output
# A numeric UID above 0: a name can map to root. The server only reads its files.
USER 10001:10001
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
