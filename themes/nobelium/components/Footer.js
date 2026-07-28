import DarkModeButton from '@/components/DarkModeButton'
import { siteConfig } from '@/lib/config'
import { resolveContactEmail } from '@/lib/plugins/mailEncrypt'

export const Footer = props => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const { post } = props
  const fullWidth = post?.fullWidth ?? false
  const since = siteConfig('SINCE')
  const copyrightDate =
    parseInt(since) < currentYear ? since + '-' + currentYear : currentYear
  const github = siteConfig('CONTACT_GITHUB')
  const email = resolveContactEmail(siteConfig('CONTACT_EMAIL'))

  return (
    <footer
      className={`z-10 relative mt-6 flex-shrink-0 m-auto w-full text-gray-500 dark:text-gray-400 transition-all ${
        !fullWidth ? 'max-w-2xl px-4' : 'px-4 md:px-24'
      }`}
    >
      <DarkModeButton className='text-center py-4' />
      <hr className='border-gray-200 dark:border-gray-600' />
      <div className='my-4 text-sm leading-6'>
        <div className='flex items-center justify-between gap-x-4 gap-y-1 flex-wrap'>
          <p>
            © {siteConfig('AUTHOR')} {copyrightDate}
          </p>
          <div className='flex items-center gap-1'>
            {github && (
              <a
                href={github}
                target='_blank'
                rel='noreferrer'
                className='hover:text-gray-900 dark:hover:text-gray-100 transition-colors'
              >
                GitHub
              </a>
            )}
            {github && email && <span aria-hidden='true'>·</span>}
            {email && (
              <a
                href={`mailto:${email}`}
                className='hover:text-gray-900 dark:hover:text-gray-100 transition-colors'
              >
                Email
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}
