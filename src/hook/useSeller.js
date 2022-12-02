import { useEffect, useState } from 'react';

const useSeller = email => {
    const [isSeller, setSeller] = useState(false)
    const [isloading, setIsloading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`https://resale-server-nine.vercel.app/users/sellers/${email}`)
                .then(res => res.json())
                .then(data => {
                    setSeller(data.isSeller)
                    setIsloading(false)

                })
        }
    }, [email])
    return [isSeller, isloading]
};

export default useSeller;