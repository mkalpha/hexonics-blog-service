import React, { useState } from "react";
import ReactDOM from "react-dom";
import {  httpBatchLink } from '@trpc/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { trpc } from './trpc';
import Blogs from './components/Blogs'

import "./index.css";

export function App() {
  console.log('App')
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: 'http://localhost:5000/trpc',
        }),
      ],
    }),
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <Blogs />
      </QueryClientProvider>
    </trpc.Provider>
  );
}
ReactDOM.render(<App />, document.getElementById("app"));
