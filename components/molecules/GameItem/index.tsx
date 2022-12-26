import Image from "next/image";
import Link from "next/link";

interface GameItemProps {
  title: string;
  category: string;
  thumbnail:
    | "thumbnail-1"
    | "thumbnail-2"
    | "thumbnail-3"
    | "thumbnail-4"
    | "thumbnail-5";
}
export default function GameItem({
  title,
  category,
  thumbnail,
}: GameItemProps) {
  return (
    <div className="featured-game-card position-relative">
      <Link href="/detail">
        <div className="blur-sharp">
          <Image
            className="thumbnail"
            src={`/img/${thumbnail}.png`}
            width={205}
            height={270}
            alt="thumbnail"
          />
        </div>
        <div className="cover position-absolute bottom-0 m-32">
          <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
            <div className="game-icon mx-auto">
              <Image
                src="/icon/console.svg"
                alt="console"
                height={36}
                width={54}
              />
            </div>
            <div>
              <p className="fw-semibold text-white text-xl m-0">{title}</p>
              <p className="fw-light text-white m-0">{category}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
