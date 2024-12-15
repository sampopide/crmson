interface DataTableProps {
  columns: string[]
}

export function DataTable({ columns }: DataTableProps) {
  return (
    <div className="rounded-md border">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-muted/50">
              {columns.map((column) => (
                <th key={column} className="px-4 py-3 text-left text-sm font-medium">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              {columns.map((_, i) => (
                <td key={i} className="px-4 py-3">
                  <div className="h-4 w-full animate-pulse rounded bg-muted"></div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
