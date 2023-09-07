import Link from "next/link";
import { useTranslation } from "next-i18next";

export default function Footer() {
    const { t } = useTranslation("");

    return (
        <footer className='w-full h-48 bg-[#2d323d] text-[#98a2aa]'>
            <div className='sm:px-16 px-6 py-10'>
                <div className='flex flex-col justify-start items-start gap-6'>
                    <img src="/dotaij-logo.png" alt="logo" width={120} height={30} className='object-contain' />
                    <p className='text-base'>{t('footer.title')}</p>
                </div>
                <div className=''>
                    {t('footer.copyright')} ©
                </div>
            </div>
        </footer>
    );
}
