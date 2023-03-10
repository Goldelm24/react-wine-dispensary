let token = '5fc9c573c276730a8bfcbc79e52234864b46dab3b9cdcbb2';

//Similar to Imsonia
export const server_calls = {
    get: async () => {
        const response = await fetch(`https://wine-dispensary.glitch.me/api/wines`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },


    create: async(data: any = {}) => {
        const response = await fetch(`https://wine-dispensary.glitch.me/api/wines`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
		},

    update: async (id:string, data:any = {}) => {
        const response = await fetch(`https://wine-dispensary.glitch.me/api/wines/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
    }, 
    
    delete: async(id:string) => {
        const response = await fetch(`https://wine-dispensary.glitch.me/api/wines/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })
    }
}