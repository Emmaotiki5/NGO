/* eslint-disable react/jsx-no-undef */
import Blank from '../assets/images/BlankUser.png'
import Image from 'next/image';



function Second () {
    return(
        <div className="mx-auto" id='second'>
            <div className="fs-1 p-5 text-center">
                Our Team
            </div>
            <div className="grid py-5 text-center" style={{'--bs-columns':1, '--bs-rows': 5}}>
                <div className='card '>
                    <div className='card-body'>
                        <div className="py-5">
                            <Image src={Blank} style={{width:'20vw', height: 'auto', height: 'auto'}} className="mx-5" alt="Leads"></Image>
                        </div>
                        <div className="w-50  mx-auto">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque inventore eligendi voluptatum magni, neque enim, aut temporibus reprehenderit explicabo    reiciendis sit unde beatae praesentium cumque libero quasi quia recusandae solutant.
                        </div>
                    </div>
                </div>
                <div>
                    <div className="py-5">
                        <Image src={Blank} style={{width:'20vw', height: 'auto'}} className="mx-5" alt="Leads"></Image>
                    </div>
                    <div className="w-50  mx-auto">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque inventore eligendi voluptatum magni, neque enim, aut temporibus reprehenderit explicabo    reiciendis sit unde beatae praesentium cumque libero quasi quia recusandae solutant.
                    </div>
                </div>
                <div>
                    <div className="py-5">
                        <Image src={Blank} style={{width:'20vw', height: 'auto'}} className="mx-5" alt="Leads"></Image>
                    </div>
                    <div className="w-50  mx-auto">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque inventore eligendi voluptatum magni, neque enim, aut temporibus reprehenderit explicabo    reiciendis sit unde beatae praesentium cumque libero quasi quia recusandae solutant.
                    </div>
                </div>
                <div>
                    <div className="py-5">
                        <Image src={Blank} style={{width:'20vw', height: 'auto'}} className="mx-5" alt="Leads"></Image>
                    </div>
                    <div className="w-50  mx-auto">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque inventore eligendi voluptatum magni, neque enim, aut temporibus reprehenderit explicabo    reiciendis sit unde beatae praesentium cumque libero quasi quia recusandae solutant.
                    </div>
                </div>
                <div>
                    <div className="py-5">
                        <Image src={Blank} style={{width:'20vw', height: 'auto'}} className="mx-5" alt="Leads"></Image>
                    </div>
                    <div className="w-50  mx-auto">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque inventore eligendi voluptatum magni, neque enim, aut temporibus reprehenderit explicabo    reiciendis sit unde beatae praesentium cumque libero quasi quia recusandae solutant.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Second;

// function Second() {
//     return (
//         <div className="container my-5">
//             <div className="text-center mb-5">
//                 <h1 className="display-4">Our Team</h1>
//             </div>
//             <div className="grid text-center" style={{ '--bs-columns': 3, '--bs-gap': '1.5rem' }}>
//                 {Array.from({ length: 5 }).map((_, index) => (
//                     <div key={index} className="g-col-12 g-col-md-6 g-col-lg-4">
//                         <div className="card h-100 text-center shadow-sm">
//                             <div className="card-body">
//                                 <Image src={Blank} style={{ width: '50%' }} className="mb-4" alt="Team member" />
//                                 <p className="card-text">
//                                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque inventore eligendi voluptatum magni, neque enim, aut temporibus reprehenderit explicabo reiciendis sit unde beatae praesentium cumque libero quasi quia recusandae solutant.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Second;