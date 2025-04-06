module.exports = {
    apps: [
        {
            name: "portfolio-frontend",
            script: "npm",
            args: "run start",
            cwd: "./",
            instances: 1,
            autorestart: true,
            watch: false,
            max_memory_restart: "500M",
            env: {
                NODE_ENV: "production",
                PORT: 3000
            }
        },
        {
            name: "portfolio-backend",
            script: "npm",
            args: "run start",
            cwd: "./server",
            instances: 1,
            autorestart: true,
            watch: false,
            max_memory_restart: "300M",
            env: {
                NODE_ENV: "production",
                PORT: 5000,
                MONGODB_URI: "mongodb://localhost:27017/portfolio"
            }
        }
    ]
}; 