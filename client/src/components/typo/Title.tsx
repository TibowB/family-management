interface TitleProps {
  value: string;
}

export default function Title({ value }: TitleProps) {
  return <h4 className="font-bold my-4">{value}</h4>;
}
