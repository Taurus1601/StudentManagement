import { Button, Input } from '@radix-ui/react';
import 'tailwindcss/tailwind.css';

function LoginPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold mb-6">Login</h1>
            <div className="flex flex-col space-y-4">
                <Input
                    type="text"
                    placeholder="USN"
                    className="w-64"
                />
                <Input
                    type="password"
                    placeholder="Password"
                    className="w-64"
                />
                <Button
                    className="w-64"
                    variant="primary"
                >
                    Submit
                </Button>
            </div>
        </div>
    );
}

export default LoginPage;
