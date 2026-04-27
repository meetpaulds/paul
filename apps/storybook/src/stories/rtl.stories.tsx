import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Alert,
  Badge,
  Input,
  Label,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from '@meetpaul/ui'

const meta = {
  title: 'Foundation / RTL (ar-SA)',
  parameters: {
    layout: 'padded',
    // Force RTL mode for this story
    globals: {
      dir: 'rtl',
    },
    // Visual test parameters for CI
    chromatic: {
      modes: {
        rtl: {
          viewport: 1200,
          globals: { dir: 'rtl' },
        },
      },
    },
    docs: {
      description: {
        story: 'Arabic (ar-SA) RTL rendering test. All logical-direction utilities (ms/me, ps/pe, start/end, border-s/e, text-start/end) must render correctly when dir="rtl" is applied at the root.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const ArabicLayout: Story = {
  render: () => (
    <div className="flex flex-col gap-6 max-w-2xl">
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold">اختبار الاتجاه من اليمين إلى اليسار</h2>
        <p className="text-muted-foreground text-sm">
          This story forces <code>dir="rtl"</code> to verify logical property classes.
        </p>
      </div>

      <Alert variant="default">
        <span>🔔</span>
        <strong>تنبيه:</strong> يجب أن تظهر الحدود والهوامش والحشو في الاتجاه الصحيح.
      </Alert>

      <div className="flex items-center gap-x-3">
        <Badge variant="default">افتراضي</Badge>
        <Badge variant="secondary">ثانوي</Badge>
        <Badge variant="outline">محيط</Badge>
        <Badge variant="destructive">تدميري</Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>بطاقة عينة</CardTitle>
          <CardDescription>نص وصفي يجب أن يبدأ من اليمين.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="grid gap-2">
            <Label htmlFor="rtl-input">الاسم الكامل</Label>
            <Input id="rtl-input" placeholder="أدخل اسمك" />
          </div>
          <div className="flex gap-x-2">
            <Button variant="default">حفظ</Button>
            <Button variant="outline">إلغاء</Button>
          </div>
        </CardContent>
      </Card>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="secondary">فتح حوار RTL</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>تأكيد العملية</DialogTitle>
            <DialogDescription>
              هل أنت متأكد أنك تريد المتابعة؟
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline">إلغاء</Button>
            <Button variant="default">تأكيد</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  ),
}
