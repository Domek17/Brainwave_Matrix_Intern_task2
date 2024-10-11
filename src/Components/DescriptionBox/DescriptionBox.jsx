import styles from "./DescriptionBox.module.css";

function DescriptionBox() {
  return (
    <div className={styles["description__box"]}>
      <div className={styles["description__navigator"]}>
        <div className={styles["description__nav--box"]}>Description</div>
        <div className={styles["description__nav--box-fade"]}>
          Reviews (122)
        </div>
      </div>

      <div className={styles["description__box--description"]}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id quos
          porro ipsa voluptatum fugit consequatur, nostrum illum totam eligendi
          et laboriosam repellat dolorum veniam eos reiciendis repudiandae a.
          Accusamus quis delectus illo quasi omnis molestiae tempore expedita,
          architecto unde impedit ratione officiis porro animi minima blanditiis
          odit deleniti maxime eius.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          nobis ad praesentium enim at ipsum dolorum. Optio corporis ab,
          inventore harum eveniet aliquam obcaecati, porro, assumenda deserunt
          quibusdam dolorem ducimus?
        </p>
      </div>
    </div>
  );
}

export default DescriptionBox;
