export const sessionOptions = {
    password: process.env.NEXT_PUBLIC_SESSION_SECRET,
    cookieName: "with/iron-session",
    cookieOptions: {
        secure: process.env.NODE_ENV === "production",
    },
};