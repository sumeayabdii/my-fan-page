
import Link from "next/link";
import Card from "./Card";
import styles from "./Card.module.css";


export default function CardGrid({ items }) {
  return (
    <div className={styles.grid}>
      {/* 1. The map loop opens here */}
      {items.map((item) => (
        
        // 2. The Link wraps the Card INSIDE the loop so 'item' is defined
        <Link href={"/faves/" + item.id} key={item.id} className={styles.link}>
          <Card 
            name={item.name} 
            blurb={item.blurb} 
            rating={item.rating} 
            emoji={item.emoji} 
            image={item.image} 
          />
        </Link>

      ))} 
      {/* 3. The map loop ends here */}
    </div>
  );
}
