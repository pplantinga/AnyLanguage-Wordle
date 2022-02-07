import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500">
        Guess the WORDLE in 4 tries. After each guess, the color of the tiles
        will change to show how close your guess was to the word.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="J" status="correct" />
        <Cell value="O" />
        <Cell value="K" />
        <Cell value="E" />
        <Cell value="S" />
      </div>
      <p className="text-sm text-gray-500">
        The letter J is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="L" />
        <Cell value="A" />
        <Cell value="U" status="present" />
        <Cell value="G" />
        <Cell value="H" />
      </div>
      <p className="text-sm text-gray-500">
        The letter U is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="F" />
        <Cell value="U" />
        <Cell value="N" />
        <Cell value="N" />
        <Cell value="Y" status="absent" />
      </div>
      <p className="text-sm text-gray-500">
        The letter Y is not in the word in any spot.
      </p>
    </BaseModal>
  )
}
