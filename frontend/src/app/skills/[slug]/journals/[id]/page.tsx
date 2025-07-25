import { JournalCreator } from "@/components/journals";

export default async function JournalPage({ params }: { params: Promise<{ id: string; slug: number }> }) {
  const { id: journalId, slug: userSkillId } = await params;

  const isNew = journalId === "new";

  return <JournalCreator isNew={isNew} journalId={Number(journalId)} userSkillId={userSkillId} />;
}
