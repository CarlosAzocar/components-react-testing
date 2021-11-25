import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

export interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({label}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
          <div className="App">
            {/* <MainContainer /> */}
            <span>Hello World {label}</span>
          </div>
        {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
      </div>
    </QueryClientProvider>
  );
}

export default Button