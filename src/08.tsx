import * as React from 'react';

interface TableProps<TItem> {
    items: TItem[];
    renderItem: (item: TItem) => React.ReactNode;
}

export function Table<TItem>(props: TableProps<TItem>) {
    console.log(props);
    return null;
}

export default (
    <Table
        items={[
            {
                id: '1',
            },
        ]}
        renderItem={(item) => <div>{item.id}</div>}
    />
);
