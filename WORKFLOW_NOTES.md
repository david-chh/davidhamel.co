# Workflow Notes for David

> Manual tasks and workflow tips for working with Claude Code.
>
> Last updated: 2026-02-15

---

## Working with Claude Code

### Session Start Routine

**What you say:**
```
"Read activeContext.md and let's continue where we left off"
```
or
```
"Today I want to implement [feature]. Read the relevant specs first."
```

**What happens:**
- Claude reads CLAUDE.md automatically (always)
- Claude reads .claude/rules/ files as needed
- You explicitly ask Claude to read activeContext.md for current state

**If starting fresh work:**
```
"Let's start [new feature]. First read [relevant spec] for the page spec."
```

### During Development

1. **Plan before coding**: "Create a plan before implementing" triggers deeper thinking
2. **Review changes**: Don't auto-accept everything; review significant code changes
3. **Use `/clear`**: Between unrelated tasks to prevent context pollution
4. **Use `/compact`**: If session gets very long and responses slow down
5. **Commit frequently**: Ask "commit these changes" - don't let work pile up
6. **Quick memories**: Type `# [instruction]` to add something to CLAUDE.md memory

**If Claude loses context mid-session:**
```
"Read activeContext.md to restore context"
```

### Session End Routine

**What you say:**
```
"Let's wrap up. Update activeContext.md, commit everything, and push."
```

**Claude will:**
1. Update `.claude/memory/activeContext.md` with current state
2. Stage, commit, and push all changes

### Recovery Scenarios

| Situation | What to say |
|-----------|-------------|
| Session crashed | "Read activeContext.md, continue where we left off" |
| Context seems lost | "Read activeContext.md to restore context" |
| Claude forgot a decision | "Check the Key Decisions table in CLAUDE.md" |

---

## Tips from Best Practices

### CLAUDE.md Optimization

- Keep CLAUDE.md under 100 lines
- Use `.claude/rules/` for detailed instructions
- Update `activeContext.md` instead of bloating CLAUDE.md

### Planning

- Ask Claude to create a markdown plan before implementing features
- Save plans as `docs/specs/[feature]-spec.md` for reference
- Review plans before giving the go-ahead

### Git Workflow

- Commit granularly so diffs stay readable
- Never let uncommitted changes pile up
- Clean git state makes it easier to isolate AI-introduced bugs

### Context Management

- Use `/clear` between unrelated tasks
- Use `/compact` if context is getting too large
- Escape key to interrupt if Claude goes off-track

---

### Specialized Agents

For complex tasks, Claude Code has specialized agents in `.claude/agents/`:

| Agent | When to Use |
|-------|-------------|
| `debugger` | Error investigation, bug fixes |
| `code-reviewer` | After significant code changes |
| `test-runner` | Running and fixing tests |
| `security-auditor` | Before deploying, after security changes |
| `performance-optimizer` | Slow load times, janky UI |
| `doc-updater` | After significant feature/architecture changes |
| `git-workflow` | Committing, branching, PRs |

---

### Important Files

| File | Purpose |
|------|---------|
| `CLAUDE.md` | Claude Code instructions (keep lean!) |
| `.claude/rules/*.md` | Modular coding rules |
| `.claude/memory/activeContext.md` | Current development state |
| `.claude/agents/*.md` | Specialized agent instructions |

---

*This file is for human reference. Claude Code reads CLAUDE.md and .claude/rules/ instead.*
