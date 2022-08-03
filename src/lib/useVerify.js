import { useEffect } from "react";
import Router from "next/router";
import useSWR from "swr";
import axios from "axios";

const fetcher = url => axios.get(url).then(res => res.data).catch(err => err.response.data);

export default function useVerify({
    redirectTo = "",
    role = "",
    redirectIfFound = false,
} = {}) {
    const { data: data, mutate: mutateData } = useSWR("/api/auth/verify", fetcher);
    useEffect(() => {
        // if no redirect needed, just return (example: already on /dashboard)
        // if user data not yet there (fetch in progress, logged in or not) then don't do anything yet
        if (!redirectTo || !data.role) return;

        if (redirectIfFound && data?.role !== role) {
            Router.push(redirectTo);
        }
        if (!redirectIfFound && 'isLogin' === role && !data?.role) {
            Router.push(redirectTo);
        }
    }, [data, redirectIfFound, redirectTo, role]);

    return { data, mutateData };
}