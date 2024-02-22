import Navbar from "./Navbar"
import Footer from "./Footer"
const PrivacyPolicy = () => {
    return (
        <>
            <Navbar/>
            <div className="px-10 py-8 bg-slate-100 dark:bg-slate-800 shadow-lg shadow-gray-600">
                <h2 className="text-4xl font-bold text-white">Privacy & Policy</h2>
                <p className="py-5 text-lg text-white">QuickAdmit Plus Team(&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;) operates the QuickAdmit Plus.<br/>
                This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.<br/>
                We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy.</p>
                <ul className="px-10 py-8">
                    <li className="text-white">
                        <h1 className="font-bold text-2xl">Information Collection and Use<br/></h1>
                        <p className="py-5 text-lg">We collect several different types of information for various purposes to provide and improve our Service to you.</p>
                    </li>
                    <li className="text-white">
                        <h1 className="font-bold text-2xl">Types of Data Collected<br/></h1>
                        <p className="py-5 text-lg">
                            Personal Data: While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (&quot;Personal Data&quot;). Personally identifiable information may include, but is not limited to:
                            <ul className="list-disc px-5">
                                <li>Email Address</li>
                            </ul>
                        </p>
                    </li>
                    <li className="text-white">
                        <h1 className="font-bold text-2xl">3. Intellectual Property Rights :<br/></h1>
                        <p className="py-5 text-lg">All content and materials on this website, including but not limited to text, graphics, logos, and images, are the property of QuickAdmit Plus and are protected by copyright and other intellectual property laws.</p>
                    </li>
                    <li className="text-white">
                        <h1 className="font-bold text-2xl">4. User Accounts :<br/></h1>
                        <p className="py-5 text-lg">If you create an account on this website, you are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.</p>
                    </li>
                    <li className="text-white">
                        <h1 className="font-bold text-2xl">5. Privacy Policy :<br/></h1>
                        <p className="py-5 text-lg">Your use of this website is subject to our Privacy Policy, which governs how we collect, use, and protect your personal information. Please review our Privacy Policy <a href="/" className="text-violet-700">here</a>.</p>
                    </li>
                    <li className="text-white">
                        <h1 className="font-bold text-2xl">6. Disclaimer of Warranties :<br/></h1>
                        <p className="py-5 text-lg">This website is provided on an &quot;as is&quot; and &quot;as available&quot; basis. QuickAdmit Plus makes no warranties or representations about the accuracy or completeness of the content on this website.</p>
                    </li>
                    <li className="text-white">
                        <h1 className="font-bold text-2xl">7. Limitation of Liability :<br/></h1>
                        <p className="py-5 text-lg">In no event shall QuickAdmit Plus be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of this website.</p>
                    </li>
                    <li className="text-white">
                        <h1 className="font-bold text-2xl">8. Changes to Terms and Conditions :<br/></h1>
                        <p className="py-5 text-lg">QuickAdmit Plus reserves the right to update or modify these Terms and Conditions at any time without prior notice. By continuing to use this website after such changes, you agree to be bound by the updated terms.</p>
                    </li>
                    <li className="text-white">
                        <h1 className="font-bold text-2xl">9. Contact Information :<br/></h1>
                        <p className="py-5 text-lg">If you have any questions or concerns about these Terms and Conditions, please contact us at admin@codecrafters.infinityfreeapp.com .</p>
                    </li>
                </ul>
            </div>
            <Footer/>
        </>
    )
}
export default PrivacyPolicy