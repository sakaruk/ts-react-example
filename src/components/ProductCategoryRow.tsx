export default function ProductCategoryRow({ category }: {category: string}) {
    return (
      <tr>
        <th colSpan={2}>
          {category}
        </th>
        <th>
          &nbsp;
        </th>
      </tr>
    );
  }