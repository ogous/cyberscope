# Cyberscope Coin Browser

This code repo contains a web application developed with Next.js and a backend service developed with Node.js & Express.js that proxies Coingecko API.

## How to Run for Development

When you're ready, start your application by running:
`docker compose up --build`.

Your api will be available at `http://localhost:3001` and webapp `http://localhost:3000`. To webapp `.env.docker` file will be injected.

Alternatively you can start both apps locally with executing `yarn dev` command. `.env.development` file will be injected when starting Next.js app locally instead of `.env.docker`.

## Data Strategy of The Implemented Architecture

Drawing inspiration from successful practices observed in platforms like Coingecko, we can outline an effective approach:

- Caching Initial Data: Utilize the power of cached HTML elements on the Next.js server to swiftly present users with the latest coin market data on the first page load. This immediate display enhances user engagement and satisfaction.

- Real-Time Updates: Upon client-side hydration, promptly update the displayed data with any fresh changes. This ensures that users are always presented with the most up-to-date information, enhancing the credibility of the platform.

- Client-Side Data Exploration: Empower users to explore and filter the data on the client-side, providing a seamless browsing experience without compromising performance.

- Incremental Generation of Coin Detail Pages: Recognizing that the creation of new coins is not as frequent as changes in their values, adopt an incremental approach to generating coin detail pages. This allows for efficient updates while maintaining responsiveness.

- Caching Coin Detail Data: Extend caching mechanisms to include coin detail data, enabling swift page delivery similar to the list page. Subsequent updates can then be seamlessly integrated on the client-side.

## Limitations

However, it's important to acknowledge certain limitations, particularly concerning the Coingecko API:

Rate Limiting: The Coingecko API imposes strict rate limits ("CoinGecko's Public API has a rate limit of 5 to 15 calls per minute, depending on usage conditions worldwide." [see here](https://support.coingecko.com/hc/en-us/articles/4538771776153-What-is-the-rate-limit-for-CoinGecko-API-public-plan#:~:text=CoinGecko's%20Public%20API%20has%20a,depending%20on%20usage%20conditions%20worldwide.)), often resulting in temporary blocks after a certain number of requests within a short timeframe. This constraint presents challenges, especially during project navigation or deployment, as backend services may become temporarily inaccessible.

## Screenshots

![Screenshot 2024-02-14 at 19 18 57](https://github.com/ogous/cyberscope/assets/47118973/80e26786-f3fa-41e3-a27c-c53a8af6a45c)

![Screenshot 2024-02-14 at 19 19 11](https://github.com/ogous/cyberscope/assets/47118973/a81b531d-5eed-4480-bf1e-dc7c1ddaa430)
