
I used pnpm - so there's the pnpm lock file now. 

This is working with this setup at the moment. 

Recommended steps: 

- Delete the `node_modules` directory.
- Delete the `.next` directory. 
- Update the values in `convex/auth.config.ts`
- Run `pnpm i` or `npm i`
- Run `pnpm dev` or `npm dev`

Visit the page in your browser. 


## Comment for the upgrade branch: 

Receiving this error: 
```
Error: Clerk: useAuth() called in static mode, wrap this component in <ClerkProvider dynamic> to make auth data available during server-side rendering.
```

Make sure you create the table from the sampleData from this link:

https://docs.convex.dev/client/react/nextjs-pages-router/quickstart

# Pages

- Root : "/" - server rendered with a UserProfile button
  - If not logged in you'll see sign in and sign up
- Dash : "/dash" - server rendered with 2 links to task lists one server rendered one client rendered.
- /dash/client - client rendered task list from convex query.
- /dash/server - server rendered task list from a convex query.

