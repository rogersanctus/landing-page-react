import Image from 'next/image'

interface SkillItemProps {
  url: string
  name: string
}

export function SkillItem({ url, name }: SkillItemProps) {
  return (
    <li className="flex flex-col items-center">
      <Image
        className="xxs:w-20 xxs:h-20 w-14 h-14"
        src={url}
        alt={`${name} logo`}
        quality={100}
        width={80}
        height={80}
      />
      <span className="xxs:text-sm text-xs font-semibold">{name}</span>
    </li>
  )
}
