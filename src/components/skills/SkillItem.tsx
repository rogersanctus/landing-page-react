import Image from 'next/image'

interface SkillItemProps {
  url: string
  name: string
}

export function SkillItem({ url, name }: SkillItemProps) {
  return (
    <li className="flex flex-col items-center">
      <Image
        className="w-20 h-20"
        src={url}
        alt={`${name} logo`}
        quality={100}
        width={80}
        height={80}
      />
      <span className="text-sm font-semibold">{name}</span>
    </li>
  )
}
