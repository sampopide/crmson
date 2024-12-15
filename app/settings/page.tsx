import { PageHeader } from '@/components/ui/page-header'

export default function Settings() {
  return (
    <div className="space-y-4">
      <PageHeader title="Settings" />
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border p-4">
          <h3 className="font-semibold">General Settings</h3>
          <p className="text-sm text-muted-foreground">
            Configure your application settings
          </p>
        </div>
        <div className="rounded-lg border p-4">
          <h3 className="font-semibold">Notifications</h3>
          <p className="text-sm text-muted-foreground">
            Manage your notification preferences
          </p>
        </div>
      </div>
    </div>
  )
}
