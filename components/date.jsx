import { parseISO, format } from "date-fns";

import styles from "../styles/modules/Layout.module.css";

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString} className={styles.dateTag}>{format(date, "dd, MMMM, yyyy")}</time>;
}
