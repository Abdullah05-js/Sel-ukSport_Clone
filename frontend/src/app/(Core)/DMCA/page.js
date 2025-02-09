import React from 'react';
import { Navbar } from '@/componets/navbar/Navbar';

export const dynamic = "force-dynamic";
export const metadata = {
    metadataBase: new URL("https://thodex.live"),
    title: "DMCA",
    description: "يتم احترام حقوق الطبع والنشر",
};

export default function page() {

    return (
        <div className='w-full min-h-screen bg-black'>
            <Navbar/>
            <div class=" max-w-3xl mx-auto p-6">
                <h1 class="text-3xl font-bold text-center mb-6">DMCA</h1>
                <h2 class="text-2xl font-semibold mb-4">Digital Millennium Copyright Act (DMCA)</h2>
                <h3 class="text-xl font-medium mb-2">Copyright Notices/Complaints:</h3>
                <p class="mb-4">The DMCA provides a legal remedy for copyright owners who believe their rights have been violated. If you believe that your copyrighted work has been infringed upon without your consent and is available on our website, you may notify our designated agent.</p>

                <ul class="list-disc list-inside mb-4 space-y-2">
                    <li>A physical or electronic signature of an authorized person.</li>
                    <li>A description of the copyrighted work that has been infringed upon.</li>
                    <li>A description of where the infringing material is located.</li>
                    <li>Contact information: address, phone number, and email.</li>
                    <li>A statement of good-faith belief that the disputed use is unauthorized.</li>
                    <li>A statement, under penalty of perjury, that the provided information is accurate.</li>
                </ul>

                <p class="mb-4">Contact us via email:</p>
                <p class="text-blue-600 underline">thodex.live@proton.me</p>

                <h2 class="text-2xl font-semibold mt-6 mb-4">إشعار قانون حقوق النشر الرقمية (DMCA)</h2>
                <p class="mb-4">يرجى اتباع أحكام الملاذ الآمن لقانون حقوق المؤلف للألفية الرقمية (DMCA) الصادرة بموجب الفقرة 512 من قانون حقوق النشر الرقمية. إذا كنت تعتقد أن أي مواد محمية بحقوق النشر تنتهك على موقعنا، يرجى إعلامنا فورًا.</p>

                <ul class="list-disc list-inside mb-4 space-y-2">
                    <li>توقيع مادي أو إلكتروني للشخص المخول بالتصرف نيابة عن حق النشر المزعوم المنتهك.</li>
                    <li>تحديد العمل المحمي بحقوق النشر المنتهك أو قائمة تمثيلية.</li>
                    <li>تحديد المواد التي يُزعم أنها تمثل انتهاكًا وتحديد مكانها.</li>
                    <li>المعلومات الكافية للاتصال بك، مثل العنوان ورقم الهاتف.</li>
                    <li>إفادة بأنك تعتقد بحسن نية أن استخدام المادة غير مصرح به.</li>
                    <li>بيان بأن المعلومات الواردة في الإخطار دقيقة، وتحت عقوبة الحنث باليمين.</li>
                </ul>

                <p class="mb-4">البريد الأكتروني للاتصال بنا:</p>
                <p class="text-blue-600 underline">thodex.live@proton.me</p>
            </div>
        </div>

    );
}


