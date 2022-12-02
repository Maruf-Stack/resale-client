
import { useEffect, useState } from "react"

const useAdmin = email => {
    const [isAdmin, setAdmin] = useState(false)
    const [isloading, setIsloading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`https://resale-server-nine.vercel.app/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    setAdmin(data.isAdmin)
                    setIsloading(false)

                })
        }
    }, [email])
    return [isAdmin, isloading]
}
export default useAdmin