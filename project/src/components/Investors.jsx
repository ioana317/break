import React from 'react'

const Investors = () => {
    const investorsImg = ['inv1.png', 'inv2.png', 'inv3.png', 'inv4.png', 'inv5.png'];

    return (
        <>
            <div className="flex items-center justify-evenly py-2 bg-white">
                {
                    investorsImg.map((link, index) => {
                        let fullLink = '/images/' + link;
                        return <a key={`${index}`}><img className="w-20 p-3" src={fullLink} /></a>
                    })
                }
            </div>
    </>
  )
}

export default Investors