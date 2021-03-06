{
    ["databars"] = {
        ["artifact"] = {
            ["height"] = 10,
            ["textFormat"] = "CURREM",
            ["orientation"] = "HORIZONTAL",
            ["width"] = 270,
        },
        ["experience"] = {
            ["height"] = 10,
            ["orientation"] = "HORIZONTAL",
            ["width"] = 270,
        },
        ["honor"] = {
            ["enable"] = false,
        },
    },
    ["currentTutorial"] = 6,
    ["sle"] = {
        ["Armory"] = {
            ["Character"] = {
                ["Enable"] = false,
            },
            ["Inspect"] = {
                ["Enable"] = false,
            },
        },
    },
    ["movers"] = {
        ["ElvUF_Raid40Mover"] = "TOPLEFT,ElvUIParent,BOTTOMLEFT,4,742",
        ["PetAB"] = "BOTTOMRIGHT,ElvUIParent,BOTTOMRIGHT,-4,280",
        ["ElvUF_RaidMover"] = "TOPLEFT,ElvUIParent,BOTTOMLEFT,4,627",
        ["ElvAB_2"] = "BOTTOM,ElvUIParent,BOTTOM,0,90",
        ["ElvUF_TargetMover"] = "BOTTOM,ElvUIParent,BOTTOM,200,270",
        ["BossButton"] = "BOTTOM,ElvUIParent,BOTTOM,0,226",
        ["TalkingHeadFrameMover"] = "BOTTOM,ElvUIParent,BOTTOM,0,343",
        ["ElvAB_4"] = "TOPRIGHT,ElvUIParent,TOPRIGHT,-351,-23",
        ["RightChatMover"] = "BOTTOMRIGHT,ElvUIParent,BOTTOMRIGHT,-4,4",
        ["ElvAB_3"] = "BOTTOM,ElvUIParent,BOTTOM,0,48",
        ["ElvAB_5"] = "BOTTOMRIGHT,ElvUIParent,BOTTOMRIGHT,-4,247",
        ["ZoneAbility"] = "BOTTOM,ElvUIParent,BOTTOM,0,289",
        ["ElvAB_1"] = "BOTTOM,ElvUIParent,BOTTOM,0,6",
        ["ElvUF_PetMover"] = "BOTTOM,ElvUIParent,BOTTOM,-200,210",
        ["ObjectiveFrameMover"] = "TOPRIGHT,ElvUIParent,TOPRIGHT,-65,-264",
        ["ElvUF_RaidpetMover"] = "TOPLEFT,ElvUIParent,BOTTOMLEFT,4,736",
        ["ShiftAB"] = "TOPLEFT,ElvUIParent,BOTTOMLEFT,4,1076",
        ["BossHeaderMover"] = "BOTTOMRIGHT,ElvUIParent,BOTTOMRIGHT,-72,329",
        ["ElvAB_6"] = "BOTTOM,ElvUIParent,BOTTOM,0,156",
        ["ArenaHeaderMover"] = "TOPRIGHT,ElvUIParent,TOPRIGHT,-72,-351",
        ["ElvUF_TargetCastbarMover"] = "BOTTOM,ElvUIParent,BOTTOM,200,251",
        ["LeftChatMover"] = "BOTTOMLEFT,ElvUIParent,BOTTOMLEFT,4,4",
        ["MicrobarMover"] = "BOTTOMRIGHT,ElvUIParent,BOTTOMRIGHT,-135,246",
        ["ElvUF_PlayerMover"] = "BOTTOM,ElvUIParent,BOTTOM,-200,270",
        ["ElvUI_RMBarMover"] = "BOTTOMRIGHT,ElvUIParent,BOTTOMRIGHT,-369,381",
        ["ElvUF_PartyMover"] = "BOTTOMLEFT,ElvUIParent,BOTTOMLEFT,4,460",
        ["ExperienceBarMover"] = "BOTTOM,ElvUIParent,BOTTOM,-200,342",
        ["ArtifactBarMover"] = "BOTTOM,ElvUIParent,BOTTOM,-200,333",
        ["ElvUF_TargetTargetMover"] = "BOTTOM,ElvUIParent,BOTTOM,200,210",
    },
    ["bags"] = {
        ["bagWidth"] = 400,
        ["ignoredItems"] = {
            ["n:上將的指南針"] = "n:上將的指南針",
            ["n:吉福斯"] = "n:吉福斯",
            ["tt:爐石"] = "tt:爐石",
            ["tt:哨子"] = "tt:哨子",
        },
        ["countFontOutline"] = "OUTLINE",
        ["itemLevelFontSize"] = 12,
        ["itemLevelFontOutline"] = "OUTLINE",
        ["bankWidth"] = 400,
        ["countFontSize"] = 12,
        ["bagSize"] = 38,
    },
    ["chat"] = {
        ["timeStampFormat"] = "%H:%M:%S ",
        ["tabFontSize"] = 14,
        ["font"] = "聊天",
        ["panelTabTransparency"] = true,
        ["panelHeight"] = 240,
        ["panelTabBackdrop"] = true,
        ["panelBackdrop"] = "LEFT",
        ["panelWidth"] = 480,
    },
    ["general"] = {
        ["fontSize"] = 14,
        ["topPanel"] = false,
        ["bordercolor"] = {
            ["r"] = 0,
            ["g"] = 0,
            ["b"] = 0,
        },
        ["autoRepair"] = "GUILD",
        ["minimap"] = {
            ["locationText"] = "SHOW",
            ["locationFontSize"] = 14,
        },
        ["decimalLength"] = 2,
        ["objectiveFrameHeight"] = 720,
        ["numberPrefixStyle"] = "CHINESE",
    },
    ["unitframe"] = {
        ["fontSize"] = 16,
        ["fontOutline"] = "NONE",
        ["smoothbars"] = true,
        ["units"] = {
            ["tank"] = {
                ["targetsGroup"] = {
                    ["height"] = 45,
                    ["width"] = 90,
                },
                ["height"] = 60,
                ["width"] = 90,
            },
            ["assist"] = {
                ["targetsGroup"] = {
                    ["height"] = 45,
                    ["width"] = 90,
                },
                ["height"] = 60,
                ["width"] = 90,
            },
            ["party"] = {
                ["debuffs"] = {
                    ["enable"] = false,
                },
                ["power"] = {
                    ["position"] = "BOTTOMRIGHT",
                },
                ["health"] = {
                    ["position"] = "BOTTOMLEFT",
                },
                ["height"] = 60,
            },
            ["raid40"] = {
                ["height"] = 60,
            },
            ["target"] = {
                ["power"] = {
                    ["position"] = "BOTTOMLEFT",
                },
                ["health"] = {
                    ["position"] = "BOTTOMRIGHT",
                },
                ["height"] = 64,
            },
            ["raid"] = {
                ["debuffs"] = {
                    ["enable"] = true,
                },
                ["resurrectIcon"] = {
                    ["enable"] = false,
                },
                ["raidWideSorting"] = false,
                ["width"] = 90,
                ["height"] = 60,
                ["buffs"] = {
                    ["enable"] = true,
                },
            },
            ["player"] = {
                ["power"] = {
                    ["position"] = "BOTTOMRIGHT",
                },
                ["name"] = {
                    ["text_format"] = "[namecolor][name:medium] [difficultycolor][smartlevel] [shortclassification]",
                },
                ["health"] = {
                    ["position"] = "BOTTOMLEFT",
                },
                ["height"] = 64,
            },
            ["boss"] = {
                ["enable"] = false,
                ["width"] = 180,
                ["height"] = 60,
            },
        },
    },
    ["actionbar"] = {
        ["bar3"] = {
            ["buttonsPerRow"] = 12,
            ["buttonsize"] = 40,
            ["buttons"] = 12,
        },
        ["bar6"] = {
            ["buttonsize"] = 40,
        },
        ["fontOutline"] = "NONE",
        ["microbar"] = {
            ["enabled"] = true,
        },
        ["raidmarkersbar"] = {
            ["visible"] = "show",
            ["scale"] = 1.2,
        },
        ["bar2"] = {
            ["enabled"] = true,
            ["buttonsize"] = 40,
        },
        ["bar1"] = {
            ["buttonsize"] = 40,
        },
        ["bar4"] = {
            ["point"] = "BOTTOMLEFT",
            ["buttonsize"] = 60,
            ["backdrop"] = false,
            ["showGrid"] = false,
        },
        ["bar5"] = {
            ["buttonsize"] = 31,
            ["buttons"] = 4,
        },
        ["fontSize"] = 16,
        ["macrotext"] = true,
        ["barPet"] = {
            ["buttonsPerRow"] = 10,
            ["backdrop"] = false,
            ["point"] = "TOPLEFT",
        },
        ["backdropSpacingConverted"] = true,
    },
    ["nameplates"] = {
        ["targetGlow"] = "style1",
        ["fontSize"] = 14,
        ["cooldown"] = {
            ["fonts"] = {
                ["font"] = "EUI",
            },
        },
        ["units"] = {
            ["PLAYER"] = {
                ["debuffs"] = {
                    ["enable"] = false,
                },
                ["buffs"] = {
                    ["enable"] = false,
                },
                ["enable"] = true,
            },
            ["FRIENDLY_NPC"] = {
                ["healthbar"] = {
                    ["height"] = 14,
                },
            },
            ["ENEMY_NPC"] = {
                ["healthbar"] = {
                    ["height"] = 14,
                    ["text"] = {
                        ["format"] = "CURRENT_PERCENT",
                    },
                },
            },
            ["ENEMY_PLAYER"] = {
                ["healthbar"] = {
                    ["text"] = {
                        ["format"] = "CURRENT_PERCENT",
                    },
                },
            },
        },
        ["glowColor"] = {
            ["r"] = 1,
            ["g"] = 1,
            ["b"] = 0,
        },
        ["clickableHeight"] = 15,
        ["fontOutline"] = "NONE",
        ["loadDistance"] = 60,
    },
    ["auras"] = {
        ["debuffs"] = {
            ["countFontSize"] = 12,
            ["durationFontSize"] = 12,
        },
        ["buffs"] = {
            ["countFontSize"] = 12,
            ["durationFontSize"] = 12,
        },
    },
    ["thinBorderColorSet"] = true,
    ["AuraWatch"] = {
        ["loadDefault"] = true,
        ["myclass"] = "HUNTER",
        ["DB"] = {
            [1] = {
                ["Direction"] = "RIGHT",
                ["Name"] = "玩家减益",
                ["List"] = {
                    [1] = {
                        ["AuraID"] = 118,
                        ["UnitID"] = "player",
                    },
                },
                ["Interval"] = 10,
                ["Mode"] = "ICON",
                ["IconSize"] = 48,
                ["Pos"] = {
                    [1] = "CENTER",
                    [2] = "UIParent",
                    [3] = "CENTER",
                    [4] = -200,
                    [5] = 200,
                },
            },
            [2] = {
                ["Direction"] = "RIGHT",
                ["Name"] = "玩家重要增益",
                ["List"] = {
                    [1] = {
                        ["AuraID"] = 82925,
                        ["UnitID"] = "player",
                    },
                    [2] = {
                        ["AuraID"] = 82926,
                        ["UnitID"] = "player",
                    },
                    [3] = {
                        ["AuraID"] = 53220,
                        ["UnitID"] = "player",
                    },
                    [4] = {
                        ["AuraID"] = 56453,
                        ["UnitID"] = "player",
                    },
                    [5] = {
                        ["AuraID"] = 34720,
                        ["UnitID"] = "player",
                    },
                    [6] = {
                        ["AuraID"] = 19623,
                        ["UnitID"] = "player",
                    },
                    [7] = {
                        ["AuraID"] = 136,
                        ["UnitID"] = "pet",
                    },
                    [8] = {
                        ["AuraID"] = 126697,
                        ["UnitID"] = "player",
                    },
                    [9] = {
                        ["AuraID"] = 126649,
                        ["UnitID"] = "player",
                    },
                    [10] = {
                        ["AuraID"] = 126599,
                        ["UnitID"] = "player",
                    },
                    [11] = {
                        ["AuraID"] = 126554,
                        ["UnitID"] = "player",
                    },
                    [12] = {
                        ["AuraID"] = 126690,
                        ["UnitID"] = "player",
                    },
                    [13] = {
                        ["AuraID"] = 126707,
                        ["UnitID"] = "player",
                    },
                    [14] = {
                        ["AuraID"] = 125489,
                        ["UnitID"] = "player",
                    },
                    [15] = {
                        ["AuraID"] = 109092,
                        ["UnitID"] = "player",
                    },
                    [16] = {
                        ["AuraID"] = 109085,
                        ["UnitID"] = "player",
                    },
                },
                ["Interval"] = 6,
                ["Mode"] = "ICON",
                ["IconSize"] = 42,
                ["Pos"] = {
                    [1] = "BOTTOMLEFT",
                    [2] = "ElvUF_Player",
                    [3] = "TOPLEFT",
                    [4] = 0,
                    [5] = 55,
                },
            },
            [3] = {
                ["Direction"] = "RIGHT",
                ["Name"] = "玩家增益",
                ["List"] = {
                    [1] = {
                        ["AuraID"] = 19263,
                        ["UnitID"] = "player",
                    },
                    [2] = {
                        ["AuraID"] = 3045,
                        ["UnitID"] = "player",
                    },
                    [3] = {
                        ["AuraID"] = 34471,
                        ["UnitID"] = "player",
                    },
                    [4] = {
                        ["AuraID"] = 82692,
                        ["UnitID"] = "player",
                    },
                    [5] = {
                        ["AuraID"] = 90361,
                        ["UnitID"] = "player",
                    },
                },
                ["Interval"] = 6,
                ["Mode"] = "ICON",
                ["IconSize"] = 42,
                ["Pos"] = {
                    [1] = "BOTTOMLEFT",
                    [2] = "ElvUF_Player",
                    [3] = "TOPLEFT",
                    [4] = 0,
                    [5] = 12,
                },
            },
            [4] = {
                ["Direction"] = "RIGHT",
                ["Name"] = "目标减益",
                ["List"] = {
                    [1] = {
                        ["UnitID"] = "target",
                        ["AuraID"] = 1130,
                        ["Caster"] = "all",
                    },
                    [2] = {
                        ["UnitID"] = "target",
                        ["AuraID"] = 1978,
                        ["Caster"] = "player",
                    },
                    [3] = {
                        ["UnitID"] = "target",
                        ["AuraID"] = 3674,
                        ["Caster"] = "player",
                    },
                    [4] = {
                        ["UnitID"] = "target",
                        ["AuraID"] = 53301,
                        ["Caster"] = "player",
                    },
                },
                ["Interval"] = 4,
                ["Mode"] = "ICON",
                ["IconSize"] = 48,
                ["Pos"] = {
                    [1] = "BOTTOMLEFT",
                    [2] = "ElvUF_Target",
                    [3] = "TOPLEFT",
                    [4] = 0,
                    [5] = 68,
                },
            },
        },
    },
}::profile::Cipherarrow
