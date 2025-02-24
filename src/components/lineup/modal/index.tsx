import styles from "./styles.module.scss";
import Image from "next/image";

export const Modal = ({
  isOpen,
  onClose,
  name,
  description,
  image,
}: {
  isOpen: boolean;
  onClose: () => void;
  name?: string;
  description: string;
  image: string;
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
        <div className={styles.image}>
          <Image src={image} alt="" width={350} height={460} />
        </div>
        <div className={styles.content}>
          {name && <h2>{name}</h2>}
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
