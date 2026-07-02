# Stage 1: Build
FROM oven/bun:1 AS builder

WORKDIR /app

# Install dependencies
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

# Copy source files and build
COPY . .
RUN bun run build

# Stage 2: Production
FROM node:22.23.1-alpine AS runner

WORKDIR /app

# Copy built output and production dependencies
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

ENV NODE_ENV=production
EXPOSE 3000

CMD ["node", "dist/index.js"]
