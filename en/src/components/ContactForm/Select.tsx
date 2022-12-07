import cn from "classnames";
import { useSelect } from "downshift";

import styles from "./ContactForm.module.scss";

interface Props {
  className?: string;
  label?: React.ReactNode;
  items: Array<{ value: string; title: string }>;
  onChange?: (value: string) => void;
}

const Select = (props: Props) => {
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({
    items: props.items,
    onSelectedItemChange: (changes) => {
      const { selectedItem } = changes;
      props.onChange?.(selectedItem?.value || "");
    },
  });

  return (
    <div className="relative">
      <div className={cn(styles["form-item"], props.className)}>
        <div className="flex" {...getLabelProps()}>
          {props.label}
        </div>
        <div className={styles["form-item-input"]} {...getToggleButtonProps()}>
          <span>{selectedItem ? selectedItem.title : ""}</span>
        </div>
      </div>
      <ul {...getMenuProps()} className={styles["select"]}>
        {isOpen &&
          props.items.map((item, index) => (
            <li
              className={cn(
                highlightedIndex === index && styles["highlight"],
                selectedItem === item && styles["active"]
              )}
              key={`${item.value}${index}`}
              {...getItemProps({ item, index })}
            >
              <span>{item.title}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Select;
