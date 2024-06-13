/* eslint-disable react/jsx-no-undef */
import ArmStretched from '../assets/images/ArmStretched.jpg';
import Image from 'next/image';

function First() {
    return (
        <div style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundColor: 'black'}} className='container-fluid' id='first'>
            <div className="mx-auto">
                <div className='p-5  text-white text-center display-1'>
                    What We Do
                </div>
                <div className="grid py-5 text-lg-center text-start " style={{}}>
                    <div className="text-white g-col-lg-4  g-col-12  text-lg-center text-start">
                        <div className='mx-auto display-1'>
                            Scholarships
                        </div>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque inventore eligendi voluptatum magni, neque enim, aut temporibus reprehenderit explicabo    reiciendis sit unde beatae praesentium cumque libero quasi quia recusandae solutant.
                        <div className="py-5 container">
                            <Image src={ArmStretched} style={{imageResolution: 'from-image'}} className="" alt="Projects"></Image>
                        </div>
                    </div>
                    <div className="text-white g-col-lg-4 g-col-12 text-lg-center text-start">
                        <div className='display-1'>
                            Donations
                        </div>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque inventore eligendi voluptatum magni, neque enim, aut temporibus reprehenderit explicabo    reiciendis sit unde beatae praesentium cumque libero quasi quia recusandae solutant.
                        <div className="py-5">
                            <Image src={ArmStretched} style={{imageResolution: 'from-image'}} className="" alt="Projects"></Image>
                        </div>
                    </div>
                    <div className="text-white g-col-lg-4  g-col-12  text-lg-center text-start">
                        <div className='mx-auto display-1'>
                            Etcetera
                        </div>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque inventore eligendi voluptatum magni, neque enim, aut temporibus reprehenderit explicabo    reiciendis sit unde beatae praesentium cumque libero quasi quia recusandae solutant.
                        <div className="py-5 mx-auto">
                            <Image src={ArmStretched} style={{imageResolution: 'from-image'}} className="" alt="Projects"></Image>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default First;

