import { useEffect, useState } from 'react';

const useUser = email => {
    const [isUser, setUser] = useState(false)
    const [isloading, setIsloading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`https://resale-server-nine.vercel.app/users/${email}`)
                .then(res => res.json())
                .then(data => {
                    setUser(data.isUser)
                    setIsloading(false)

                })
        }
    }, [email])
    return [isUser, isloading]
};

export default useUser;