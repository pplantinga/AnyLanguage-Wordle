import { CONFIG } from '../../constants/config'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500">
        This is an open source clone of the game Wordle adapted to become{' '}
        {CONFIG.language} by{' '}
        <a href={CONFIG.authorWebsite} className="underline font-bold">
          {CONFIG.author}
        </a>{' '}
        and{' '}
        <a href={CONFIG.author2Website} className="underline font-bold">
          {CONFIG.author2}
        </a>{' '}
        - check out{' '}
        <a
          href="https://github.com/hannahcode/wordle"
          className="underline font-bold"
        >
          the original code
        </a>{' '}
        by{' '}
        <a
          href="https://www.hannahmariepark.com/"
          className="underline font-bold"
        >
          Hannah Park
        </a>{' '}
        or have a look at{' '}
        <a
          href="https://github.com/roedoejet/AnyLanguage-Wordle"
          className="underline font-bold"
        >
          Aidan Pine's fork
        </a>{' '}
        and customize it for other languages! The words for {CONFIG.language} were
        sourced from the original Wordle, which you can{' '}
        <a
          href="https://www.powerlanguage.co.uk/wordle/"
          className="underline font-bold"
        >
          play here
        </a>
        .
      </p>
    </BaseModal>
  )
}
