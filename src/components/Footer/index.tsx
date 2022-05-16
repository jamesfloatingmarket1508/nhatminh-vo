import { useTheme } from "next-themes";
import Image from "next/image";
import { socialMediaButtons } from "../../constants/socialMediaButtons";
import styles from "./styles.module.scss";

export function Footer() {
  const { theme } = useTheme();

  return (
    <footer className={styles.footer}>
      {Object.entries(socialMediaButtons).map(([key, value]) => {
        return (
          <a
            key={key}
            href={value.url}
            target="_blank"
            rel="noreferrer"
            title={`Look at ${key}`}
          >
            {theme === "dark" ? (
              <Image
                src={value.icon}
                className={styles.button}
                alt={`${key} button`}
              />
            ) : (
              <Image
                src={value.icon}
                className={styles.button}
                alt={`${key} button`}
              />
            )}
          </a>
        );
      })}
    </footer>
  );
}
